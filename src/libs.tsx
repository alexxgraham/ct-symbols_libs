import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';

import { EmoteIndexState, PackageLinks } from '@ag108/ct-utils';

const PKG_NAME = 'symbol & emoticon';

export const Faces = ({setTab}: {setTab: TabDispatchAction}) => {	
		return <PackageLinks modules={['smiley', 'sad', 'angry', 'funny', 'affectionate', 'sick', 'other']} pkgName={PKG_NAME} libName='faces' backTab={EmoteIndexState} setTab={setTab} />;
}
export const FoodAndBev = ({setTab}: {setTab: TabDispatchAction}) => {	
		return <PackageLinks modules={['fruits', 'veggies', 'baked goods', 'fast food', 'candy', 'beverages']} pkgName={PKG_NAME} libName='food & drink' backTab={EmoteIndexState} setTab={setTab} />;
}
export const Nature = ({setTab}: {setTab: TabDispatchAction}) => {	
		return <PackageLinks modules={['mammals', 'marine life', 'reptiles', 'birds', 'other animals', 'flowers & foliage', 'weather & astronomy']} pkgName={PKG_NAME} libName='nature' backTab={EmoteIndexState} setTab={setTab} />;
}
export const Objects = ({setTab}: {setTab: TabDispatchAction}) => {	
		return <PackageLinks modules={['sports', 'music', 'gaming', 'transportation', 'landmarks', 'postcards', 'electronic devices', 'weapons', 'home', 'office / school']} pkgName={PKG_NAME} libName='objects' backTab={EmoteIndexState} setTab={setTab} />;
}
export const Hearts = ({setTab}: {setTab: TabDispatchAction}) => {	
		return <PackageLinks modules={['solid color', 'special']} pkgName={PKG_NAME} libName='hearts' backTab={EmoteIndexState} setTab={setTab} />;
}
export const Flags = ({setTab}: {setTab: TabDispatchAction}) => {	
		return <PackageLinks modules={['common', 'country']} pkgName={PKG_NAME} libName='flags' backTab={EmoteIndexState} setTab={setTab} />;
}
export const MoreText = ({setTab}: {setTab: TabDispatchAction}) => {	
		return <PackageLinks modules={['cat faces', 'human anatomy', 'people & professions', 'clothes', 'misc (ungrouped)']} pkgName={PKG_NAME} libName='more...' backTab={EmoteIndexState} setTab={setTab} />;
}