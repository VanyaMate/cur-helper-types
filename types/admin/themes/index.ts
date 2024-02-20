import { With } from '../../types';
import { ThemeType } from '../../theme';
import { ThemeQuestionsShort, ThemeTestsShort } from '../../themes';


export type AdminThemeType = With<ThemeType, [
    ThemeQuestionsShort,
    ThemeTestsShort
]>

export type AdminThemeShortType = Pick<ThemeType, 'id' | 'publicId' | 'title' | 'description' | 'enabled' | 'url'>;