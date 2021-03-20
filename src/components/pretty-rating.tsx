import React from 'react';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createIcon } from '../helper/create-icon.helper';
import { customStyles } from '../helper/custom-styles.helper';
import * as PrettyRatingInterface from '../types';

const defaultColors = ['#000', '#000', '#000'];
library.add(fas);

export const PrettyRating = ({
	rating,
	icons,
	iconsNumber = 5,
	setColors = defaultColors,
}: PrettyRatingInterface.Props) => {
	const iconsToRender = createIcon({ rating, icons, iconsNumber });

	return (
		<>
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
								currentIcon: icon.name,
								icons,
								type: icon.type,
								colors: setColors,
							}),
						}}
					/>
				);
			})}
		</>
	);
};
