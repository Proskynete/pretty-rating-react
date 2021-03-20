import React from 'react';
import { createIcon } from '../helper/create-icon.helper';
import { customStyles } from '../helper/custom-styles.helper';
import { PrettyRatingInterface } from '../types';

const defaultColors = ['#000', '#000', '#000'];

export const PrettyRating = ({
	rating,
	icons,
	iconsNumber = 5,
	setColors = defaultColors,
}: PrettyRatingInterface) => {
	const iconsToRender = createIcon({ rating, icons, iconsNumber });

	return (
		<>
			{iconsToRender.map((icon, i) => {
				return (
					<i
						key={i}
						style={{
							color: customStyles({
								currentIcon: icon.name,
								icons,
								type: icon.type,
								colors: setColors,
							}),
						}}
						className={icon.name}
						aria-hidden='true'
					/>
				);
			})}
		</>
	);
};
