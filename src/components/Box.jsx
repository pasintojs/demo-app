export default function Box() {
  return (
    <>
      <div class="rounded-xl border bg-card text-card-foreground shadow max-w-[260px]">
        <div class="p-1">
          <div class="rdp p-3">
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
              <div class="space-y-4 rdp-caption_start rdp-caption_end">
                <div class="flex justify-center pt-1 relative items-center">
                  <div
                    class="text-sm font-medium"
                    aria-live="polite"
                    role="presentation"
                    id="react-day-picker-2"
                  >
                    June 2023
                  </div>
                  <div class="space-x-1 flex items-center">
                    <button
                      aria-label="Go to previous month"
                      class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
                      type="button"
                      name="previous-month"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-left h-4 w-4 rdp-nav_icon"
                      >
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </button>
                    <button
                      aria-label="Go to next month"
                      class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
                      type="button"
                      name="next-month"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-right h-4 w-4 rdp-nav_icon"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <table
                  class="w-full border-collapse space-y-1"
                  role="grid"
                  aria-labelledby="react-day-picker-2"
                >
                  <thead class="rdp-head">
                    <tr class="flex">
                      <th
                        scope="col"
                        class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                        aria-label="Sunday"
                      >
                        Su
                      </th>
                      <th
                        scope="col"
                        class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                        aria-label="Monday"
                      >
                        Mo
                      </th>
                      <th
                        scope="col"
                        class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                        aria-label="Tuesday"
                      >
                        Tu
                      </th>
                      <th
                        scope="col"
                        class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                        aria-label="Wednesday"
                      >
                        We
                      </th>
                      <th
                        scope="col"
                        class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                        aria-label="Thursday"
                      >
                        Th
                      </th>
                      <th
                        scope="col"
                        class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                        aria-label="Friday"
                      >
                        Fr
                      </th>
                      <th
                        scope="col"
                        class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                        aria-label="Saturday"
                      >
                        Sa
                      </th>
                    </tr>
                  </thead>
                  <tbody class="rdp-tbody">
                    <tr class="flex w-full mt-2">
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          28
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          29
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          30
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          31
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          1
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          2
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          3
                        </button>
                      </td>
                    </tr>
                    <tr class="flex w-full mt-2">
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          4
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground day-range-start"
                          role="gridcell"
                          aria-selected="true"
                          tabindex="0"
                          type="button"
                          name="day"
                        >
                          5
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground"
                          role="gridcell"
                          aria-selected="true"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          6
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground"
                          role="gridcell"
                          aria-selected="true"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          7
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground"
                          role="gridcell"
                          aria-selected="true"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          8
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground"
                          role="gridcell"
                          aria-selected="true"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          9
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground"
                          role="gridcell"
                          aria-selected="true"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          10
                        </button>
                      </td>
                    </tr>
                    <tr class="flex w-full mt-2">
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground"
                          role="gridcell"
                          aria-selected="true"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          11
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground"
                          role="gridcell"
                          aria-selected="true"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          12
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground day-range-end"
                          role="gridcell"
                          aria-selected="true"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          13
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          14
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          15
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          16
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          17
                        </button>
                      </td>
                    </tr>
                    <tr class="flex w-full mt-2">
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          18
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          19
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          20
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          21
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          22
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          23
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          24
                        </button>
                      </td>
                    </tr>
                    <tr class="flex w-full mt-2">
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          25
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          26
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          27
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          28
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          29
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          30
                        </button>
                      </td>
                      <td
                        class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md"
                        role="presentation"
                      >
                        <button
                          class="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                          role="gridcell"
                          tabindex="-1"
                          type="button"
                          name="day"
                        >
                          1
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
