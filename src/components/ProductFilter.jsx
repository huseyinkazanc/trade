import React from "react";
function ProductFilter() {
  return (
    <div className="bg-[#f4f2f2] shadow-lg h-[50%]">
      <div className="left-0">
        <div class="relative flex min-h-screen flex-col justify-start overflow-hidden bg-gray-50 py-4">
          ,
          <div class="mx-auto px-5">
            <div class="flex flex-col items-center">
              <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-xl">
                <span className="text-[#131820]">Filter</span>
              </h2>
            </div>
            <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              <div class="py-5">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span> Brand</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div class="group-open:animate-fadeIn mt-3  text-neutral-600 text-xl">
                    <input type="checkbox" />
                    <span>A Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>B Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>C Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>D Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>E Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>F Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>G Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>H Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>M Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>N Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>L Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>LL Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>P Brand</span>
                    <br />
                    <input type="checkbox" />
                    <span>I Brand</span>
                    <br />
                  </div>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>Price</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                    We offer a 30-day money-back guarantee for most of its
                    subscription plans. If you are not satisfied with your
                    subscription within the first 30 days, you can request a
                    full refund. Refunds for subscriptions that have been active
                    for longer than 30 days may be considered on a case-by-case
                    basis.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>Category</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                    To cancel your subscription, you can log in to your account
                    and navigate to the subscription management page. From
                    there, you should be able to cancel your subscription and
                    stop future billing.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>Color</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                    We offer a free trial of our software for a limited time.
                    During the trial period, you will have access to a limited
                    set of features and functionality, but you will not be
                    charged.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>Warranty Period</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                    If you need help with our platform or have any other
                    questions, you can contact the company's support team by
                    submitting a support request through the website or by
                    emailing support@ourwebsite.com.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span> Do you offer any discounts or promotions?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                    We may offer discounts or promotions from time to time. To
                    stay up-to-date on the latest deals and special offers, you
                    can sign up for the company's newsletter or follow it on
                    social media.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
