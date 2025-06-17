import {inject} from "@vercel/analytics"
import {injectSpeedInsights} from "@vercel/speed-insights";

document.querySelector("#app").innerHTML = `
<main>
</main>
`

inject();
injectSpeedInsights();