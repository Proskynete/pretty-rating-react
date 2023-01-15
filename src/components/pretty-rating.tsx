import React, { useEffect, useState } from 'react';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createIcon } from '../helpers/create-icon.helper';
import { customStyles } from '../helpers/custom-styles.helper';
import * as PrettyRatingInterface from '../types';
import { defaultValues } from '../config';

library.add(fas);

export const PrettyRating = ({
	value,
	icons = defaultValues.icons,
	max = defaultValues.max,
	colors = defaultValues.colors,
	onChange,
}: PrettyRatingInterface.Props) => {
	const [iconsToRenderState, setIconsToRenderState] =
		useState<PrettyRatingInterface.CreateIconResponse[]>();

	useEffect(() => {
		const iconsToRender = createIcon({ value, icons, max });
		setIconsToRenderState(iconsToRender);
	}, []);

	const handleOnMouseEnter = (i: number) => {
		const iconsToRender = createIcon({ value: i, icons, max });
		setIconsToRenderState(iconsToRender);
	};

	const handleOnMouseLeave = () => {
		const iconsToRender = createIcon({ value, icons, max });
		setIconsToRenderState(iconsToRender);
	};

	const handleOnChange = (newValue: number) => {
		onChange && onChange(newValue);
	};

	return (
		<>
			{iconsToRenderState?.map((icon, i) => {
				return (
					<FontAwesomeIcon
						key={i}
						icon={typeof icon.name === 'string' ? (icon.name as IconProp) : icon.name}
						style={{
							cursor: 'pointer',
							color: customStyles({
								current: icon.name,
								icons,
								type: icon.type,
								colors,
							}),
						}}
						onMouseEnter={() => handleOnMouseEnter(i + 1)}
						onMouseLeave={() => handleOnMouseLeave()}
						onClick={() => handleOnChange(i + 1)}
					/>
				);
			})}
		</>
	);
};
