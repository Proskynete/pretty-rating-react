import React from 'react';
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
	const iconsToRender = createIcon({ value: +value, icons, max: +max });

	return (
		<div>
			{iconsToRender.map((icon, i) => {
				return (
					<FontAwesomeIcon
						key={i}
						icon={
							typeof icon.name === 'string'
								? (icon.name as IconProp)
								: icon.name
						}
						style={{
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
		</div>
	);
};
