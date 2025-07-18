import { sdk } from '$lib/stores/sdk';
import type { PageLoad } from './$types';
import { Dependencies } from '$lib/constants';

export const load: PageLoad = async ({ params, depends }) => {
    depends(Dependencies.PLATFORMS);
    return {
        platforms: await sdk.forConsole.projects.listPlatforms(params.project)
    };
};
