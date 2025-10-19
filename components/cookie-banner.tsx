"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/90 text-white p-5 shadow-lg border-t border-zinc-750">
      {" "}
      {/* Adjusted background, padding, shadow, and border */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {" "}
          {/* Adjusted spacing */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-3">Your Privacy, Our Priority: Cookie Notice</h3> {/* Unique heading */}
            <p className="text-sm text-gray-350">
              We utilize cookies to significantly enhance your browsing experience, deliver personalized advertisements
              or content, and meticulously analyze our website traffic. By clicking &quot;Accept All&quot;, you grant
              your consent to our use of these cookies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {" "}
            {/* Adjusted spacing */}
            <Button
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white bg-transparent" // Adjusted colors
              onClick={declineAll}
            >
              Decline All
            </Button>{" "}
            {/* Unique button text */}
            <Button className="bg-emerald-700 hover:bg-emerald-800 text-white" onClick={acceptAll}>
              Accept All Cookies
            </Button>{" "}
            {/* Unique button text */}
          </div>
        </div>
      </div>
    </div>
  )
}
