import { __ } from "@wordpress/i18n";
import { TextControl, TextareaControl, SelectControl } from "@wordpress/components";
import { MediaUpload, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, role, description, imageUrl, imageId, link, style } = attributes;
	return (
		<div {...useBlockProps()}>
			<div class={`card-info expanded ${style}`} id="card">
				<div class="card-info-meta">
					<MediaUpload
						onSelect={(media) =>
							setAttributes({ imageUrl: media.url, imageId: media.id })
						}
						allowedTypes={["image"]}
						value={imageId}
						render={({ open }) => (
							<button onClick={open}>
								{!imageUrl ? (
									"Seleccionar imagen"
								) : (
									<img src={imageUrl} alt={title} />
								)}
							</button>
						)}
					/>					
					<SelectControl
						label="Style"
						value={style}
						options={[
							{ label: "Left To Right", value: "ltr" },
							{ label: "Right To Left", value: "rtl" },
						]}
						onChange={(selectedStyle) =>
							setAttributes({ style: selectedStyle })
						}
					/>
				</div>
				<div class="card-content">
					<h3>
						<TextControl
							label="Title"
							value={title}
							onChange={(newTitle) => setAttributes({ title: newTitle })}
						/>
					</h3>
					<p>
						<TextControl
							label="Role"
							value={role}
							onChange={(newRole) => setAttributes({ role: newRole })}
						/>
					</p>
					<p>
						<TextControl
							label="Linkedin Link"
							value={link}
							onChange={(newLink) => setAttributes({ link: newLink })}
						/>
					</p>
				</div>
				<div class="expand-content">
					<TextareaControl
						label="Description"
						value={description}
						onChange={(newDescription) =>
							setAttributes({ description: newDescription })
						}
					/>
				</div>
			</div>
		</div>
	);
}
