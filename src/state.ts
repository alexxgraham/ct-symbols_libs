import { Tab } from '@ag108/ct-utils/types/main';

const Closed = false;

export const FacesState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed},
	file: { index: Closed, image: Closed, pdf: Closed, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: true, foodBev: Closed, nature: Closed, objects: Closed, hearts: Closed, flags: Closed, moreSymbols: Closed },
};
export const FoodAndBevState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed},
	file: { index: Closed, image: Closed, pdf: Closed, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: true, nature: Closed, objects: Closed, hearts: Closed, flags: Closed, moreSymbols: Closed },
};
export const NatureState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed},
	file: { index: Closed, image: Closed, pdf: Closed, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: Closed, nature: true, objects: Closed, hearts: Closed, flags: Closed, moreSymbols: Closed },
};
export const ObjectsState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed},
	file: { index: Closed, image: Closed, pdf: Closed, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: Closed, nature: Closed, objects: true, hearts: Closed, flags: Closed, moreSymbols: Closed },
};
export const HeartsState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed},
	file: { index: Closed, image: Closed, pdf: Closed, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: Closed, nature: Closed, objects: Closed, hearts: true, flags: Closed, moreSymbols: Closed },
};
export const FlagsState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed},
	file: { index: Closed, image: Closed, pdf: Closed, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: Closed, nature: Closed, objects: Closed, hearts: Closed, flags: true, moreSymbols: Closed },
};
export const MoreSymbolsState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: Closed, absolute: Closed, special: Closed, custom: Closed},
	file: { index: Closed, image: Closed, pdf: Closed, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: Closed, nature: Closed, objects: Closed, hearts: Closed, flags: Closed, moreSymbols: true },
};
