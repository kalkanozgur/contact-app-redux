import React, { useCallback, useEffect } from "react";

function Modal(props) {
	const { onClose, show, title } = props;

	const closeOnEscapeKeyDown = useCallback(
		(e) => {
			if ((e.charCode || e.keyCode) === 27) {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		document.body.addEventListener("keydown", closeOnEscapeKeyDown);
		return function cleanup() {
			document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
		};
	}, [closeOnEscapeKeyDown]);

	// if (!show) {
	// 	return null;
	// }

	return (
		// Modal
		<div
			className={`${
				show
					? `opacity-1 scale duration-300 `
					: `scale-0 opacity-0 duration-300 `
			} fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-50/[.6]`}
			onClick={onClose}
		>
			{/* Modal Content */}
			<div
				className="box-border flex h-80 w-80 flex-col rounded-xl bg-gray-500 p-5"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Modal Header */}
				<div className="">
					{/* Modal Title */}
					<h1 className="text-2xl">{title}</h1>
				</div>
				{/* Modal Body */}
				<div className="my-auto ">{props.children}</div>
				{/* Modal Footer */}
				<div>
					<button onClick={onClose}>Close</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
