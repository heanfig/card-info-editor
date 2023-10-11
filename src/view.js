/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
const cards = document.querySelectorAll(".card-info");
var style = getComputedStyle(document.body);
const breakpoint = style.getPropertyValue("--breakpoint-disable-events");

cards.forEach((card) => {
	card.addEventListener("click", function (e) {
		if (window.matchMedia(`(min-width: ${breakpoint})`).matches) {
			const expandContent = e.currentTarget.querySelector(".expand-content");
			card.classList.toggle("expanded");

			if (card.classList.contains("expanded")) {
				card.addEventListener(
					"transitionend",
					function () {
						expandContent.style.opacity = "1";
					},
					{ once: true },
				);
			} else {
				expandContent.style.opacity = "0";
			}
		}
	});
});
/* eslint-enable no-console */
