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
}: PrettyRatingInterface.Props) => {
	const [_value, setValue] = useState<number>(value);
	const [iconsToRenderState, setIconsToRenderState] =
		useState<PrettyRatingInterface.CreateIconResponse[]>();

	useEffect(() => {
		const iconsToRender = createIcon({ value: _value, icons, max });
		setIconsToRenderState(iconsToRender);
	}, [_value]);

	return (
		<>
			{iconsToRenderState?.map((icon, i) => {
				return (
					<FontAwesomeIcon
						key={i}
						icon={typeof icon.name === 'string' ? (icon.name as IconProp) : icon.name}
						onMouseEnter={() => {
							const iconsToRender = createIcon({ value: i + 1, icons, max });
							setIconsToRenderState(iconsToRender);
						}}
						onMouseLeave={() => {
							const iconsToRender = createIcon({ value: _value, icons, max });
							setIconsToRenderState(iconsToRender);
						}}
						onClick={() => {
							setValue(i + 1);
						}}
						style={{
							cursor: 'pointer',
							color: customStyles({
								current: icon.name,
								icons,
								type: icon.type,
								colors,
							}),
						}}
					/>
				);
			})}
		</>
	);
};
