import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';
import { PackageLibraries } from '@ag108/ct-utils/types/main';

import { PackageIndexLink } from '@ag108/ct-utils';

import { FacesState, FlagsState, FoodAndBevState, HeartsState, MoreSymbolsState, NatureState, ObjectsState } from '~/state';

const libraries: PackageLibraries = [
	{ name: 'faces', tabState: FacesState },
	{ name: 'food & drink', tabState: FoodAndBevState },
	{ name: 'nature', tabState: NatureState },
	{ name: 'objects', tabState: ObjectsState },
	{ name: 'hearts', tabState: HeartsState },
	{ name: 'flags', tabState: FlagsState },
	{ name: 'more...', tabState: MoreSymbolsState },
]
		
export const IndexEmote = ({setTab}: {setTab: TabDispatchAction}) => {
	return (
		<article className='flex flex-col pt-2'>
			<p className='text-accent uppercase'>
				[<PackageIndexLink setTab={setTab} />] symbols & emoticons ({libraries.length} items):
			</p>
			<ol className='flex flex-col px-4 items-start h-[140px] overflow-scroll'>
				{libraries.map((library, i) => (
					<li key={i + 1}>
						<button onClick={() => setTab(library.tabState)} className='uppercase outline-none'>
							{i + 1}) [<span className='hover:underline cursor-pointer'>{library.name}</span>]
						</button>
					</li>
				))}
			</ol>
		</article>
	);
}

export { Faces, FoodAndBev, Nature, Objects, Hearts, Flags, MoreText } from '~/libs'