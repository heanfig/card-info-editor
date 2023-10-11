/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { title, role, description, imageUrl, link, style } = attributes;
	return (
		<div class={`card-wrapper ${style}`} {...useBlockProps.save()}>
			<div class="card-info" id="card">
				{imageUrl && <img src={imageUrl} alt={title} />}
					<div class="card-content">
						<h3>{title}</h3>
						<div class="card-content-info">
							<p>{role}</p>
							<div class="card-content-info--icon">
								<a href={link} target="_blank" rel="noopener">
									<svg
										width="35"
										height="35"
										viewBox="0 0 35 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="35" height="35" rx="2" fill="#4A36CA"></rect>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M15.0575 14.6206H18.5858V16.378C19.0941 15.3672 20.3975 14.4591 22.3554 14.4591C26.1089 14.4591 27 16.4712 27 20.1629V27H23.2V21.0036C23.2 18.9012 22.6918 17.7157 21.3979 17.7157C19.6033 17.7157 18.8575 18.9934 18.8575 21.0027V27H15.0575V14.6206ZM8.5415 26.8385H12.3415V14.4591H8.5415V26.8385ZM12.8858 10.4225C12.886 10.741 12.8228 11.0564 12.7 11.3503C12.5772 11.6441 12.3972 11.9107 12.1705 12.1344C11.7111 12.591 11.0892 12.8466 10.4415 12.845C9.79492 12.8446 9.1745 12.5896 8.7144 12.1354C8.4885 11.9109 8.30912 11.644 8.18653 11.3501C8.06394 11.0562 8.00055 10.741 8 10.4225C8 9.77935 8.2565 9.16375 8.71535 8.70965C9.17504 8.25475 9.79573 7.99972 10.4425 8C11.0904 8 11.7116 8.25555 12.1705 8.70965C12.6284 9.16375 12.8858 9.77935 12.8858 10.4225Z"
											fill="white"
										></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div class="expand-content">
						<p>{description}</p>
					</div>
			</div>
		</div>
	);
}
