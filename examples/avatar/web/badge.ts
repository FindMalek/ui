import "@ui-sdk/web/avatar"
import { Check, createElement } from "lucide"

const people = [
  {
    name: "Ada Lovelace",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAACqklEQVR42u2Yu2tUQRSH7z+itShYCBYRMRaSFIKPIj4qMQppVhexEVIYVHwEExGCWUHYCCEhUVZB4osEERITsDFLwJBoYZcqRCzsxA8GhiXujffOmdwzCwO/YnfnnDO/b+7c2ZlJPqz+aWklESACRIAIEAEiQATYpPH3S9dvDPacv3DuVBfiA1/5sQUAHjyePH64rX33jqaiiYBAARjg00c706w3ijCPTyPx5b5z/54s7o0I9sWQFO/eL4MU4M2XDQf3loF0ZYBy6YqbeyPSNQGqLz5J3BtRRA1AOPxeHkIimf3WRNehvbMjt3KJFJsueRPcAYZH31oHGPo5P5ZLpNh0SikAsDsw3ZdOtud1b0SiqUApBQA2Oab72v2rbgAkmgqU0gRwc2+kD+A8fxpnkSbAQPmsBIB0NQB2+fRdudYtASCdIpRSW4W8AOisQuwlfQFItqWirQQnLPk7QBG1vRCPXr4KSeaPFMAcBiQA8iOB9DxwZ/DJu0e9bu5JJF3/SDl077YbAIlBnImZA98+1vK6J0V+nvR2KzG3/Gt94Xl29wSTEta9UH3pe3YAgkO8mcvI4NG9/6vFha/ra59fp1mniYDQL3eXF+tpADS1wO10BIgAESACaAE8m9+4Wa2/nJhKA6CJAMLCAng6s3axb2bfscrOA/3obl8lDYAmE0MwKSQqAzCcB8+MGE9Wl8pD06PVpqJpUzDpFFEAGH71ww65XJSiYEEAU4u/T5Rqvqw3irIU314AZq3HgW/6KPK+GEku97uOPNw+90Z0kYshCcq9A0OScYEvzL1lyPh3kQng37WyANGpH4DL/bPFuzeiaylA8ZMn70T6DwB/+FrujTAgAlAcfvsQ3AEGJlZ03RthwxFAff5kmUVbAXR0j4cAgA1HgBDcG21h8i9D6D5a5WfrvgAAAABJRU5ErkJggg==",
  },
  {
    name: "Grace Hopper",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAACqklEQVR42u2YwUtUQRzH35/RvToEQRLRQSqCrSBCdIlACgIrITIWpKBFhA5RhxUKFzIQSQSRUKOLlp0EkwUvGRR1qegQ5CGCwFuXPjExLLbP3pvf+H6zMPA96M7v93vfz8y8eTOT/FrfaGslESACRIAIEAEiQATYonfPXtWH7g2c77vYcw7xB//yYxsAzD94XOo8sm/vnpaiiYBAAejgnpOn06w3izCPo5H4cn+4oyOLeyOCfTEkxbv3yyAF+LH60cG9ZSBdGaDaX3Fzb0S6JkBj+oXEvRFF1ACE3e9lEBLJ7Lcmjh7cPzl4NpdIsemSN8Ed4OX4nHWAoUbtci6RYtMppQDA7uDvh+nYobzujUg0FSilAMAmxzx+5MoZNwASTQVKaQK4uTfSB3CeP82zSBOgUj4uASBdDYBd/p9VvPeEBIB0ilBKbRXyAqCzCrGX9AUg2ZaKthKcsOTvAEXU9kIMvXwVkswfKYA5DEgA5EcC6Xlg8m794bVuN/ckkq5/pKzfGHQDIDGIMzFzoDFazQ0wWpWfJ73dSmw2PqzdH8junmBSwroX+rb4PDsAwSHezGVk8Oje/9Xiz5X1N4+G06zTREDol7tf5mfSAGhqg9vpCBABIkAE0AL4vvT2dW125Xbqd4AmAggLC+Dr07WlqyP1A713dpXQdDn1mpEmE0MwKSQqA9Cd452XjCeriVL3YuVCS9G0JZh0iigAfJpatl0uF6UoWBDA5urnJ+Vbvqw3i7IU31kAZq3Hjm85FHlfjCSX+9rurp1zb8QjcjEkQbl3YEgyLvCFubcMGT8XmQD+XSsLEA/1A7B8c6x490Y8WgpQ/OTJO5H+A8AHX8u9EQZEAIrdbwfBHeD92IKueyNsOAKoz58ss2g7gKlT10MAwIYjQAjujbYx+RsyDhTspshSqQAAAABJRU5ErkJggg==",
  },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex items-center gap-6">
      <ui-avatar class="relative flex size-8 shrink-0 rounded-full select-none">
        <img src="${people[0].src}" alt="${people[0].name}" class="size-full rounded-full object-cover" />
        <ui-avatar-fallback class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">AL</ui-avatar-fallback>
        <span class="absolute end-0 bottom-0 size-2.5 rounded-full bg-green-600 ring-2 ring-background">
          <span class="sr-only">Online</span>
        </span>
      </ui-avatar>
      <ui-avatar class="relative flex size-8 shrink-0 rounded-full select-none">
        <img src="${people[1].src}" alt="${people[1].name}" class="size-full rounded-full object-cover" />
        <ui-avatar-fallback class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">GH</ui-avatar-fallback>
        <span class="absolute -end-0.5 -bottom-0.5 flex size-3.5 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background">
          ${createElement(Check, { class: "size-2.5", "stroke-width": 3, "aria-hidden": "true" }).outerHTML}
          <span class="sr-only">Verified</span>
        </span>
      </ui-avatar>
    </div>
  `
}
