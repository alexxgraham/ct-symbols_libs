import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';
import { PackageLibraries } from '@ag108/ct-utils/types/main';

import { cn, PackageIndexLink } from '@ag108/ct-utils';

import { FacesState, FlagsState, FoodAndBevState, HeartsState, MoreSymbolsState, NatureState, ObjectsState } from '~/state';

const libraries: PackageLibraries = [
	{ name: 'faces', tabState: FacesState },
	{ name: 'food & drink', tabState: FoodAndBevState },
	{ name: 'nature', tabState: NatureState },
	{ name: 'objects', tabState: ObjectsState },
	{ name: 'hearts', tabState: HeartsState },
	{ name: 'flags', tabState: FlagsState },
	{ name: 'more...', tabState: MoreSymbolsState },
];

export const IndexEmote = ({ setTab }: { setTab: TabDispatchAction }) => {
	return (
		<article className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-top-2')}>
			<p className={cn('ct-utils_text-accent', 'ct-utils_uppercase')}>
				[<PackageIndexLink setTab={setTab} />] symbols & emoticons ({libraries.length} items):
			</p>
			<ol className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-x-4', 'ct-utils_items-start', 'ct-utils_h-8-75rem', 'ct-utils_overflow-scroll')}>
				{libraries.map((library, i) => (
					<li key={i + 1}>
						<button onClick={() => setTab(library.tabState)} className={cn('ct-utils_uppercase', 'ct-utils_outline-none')}>
							{i + 1}) [<span className={cn('ct-utils_hover ct-utils_underline', 'ct-utils_cursor-pointer')}>{library.name}</span>]
						</button>
					</li>
				))}
			</ol>
		</article>
	);
};

export { Faces, FoodAndBev, Nature, Objects, Hearts, Flags, MoreText } from '~/libs';
