import { With } from '../../types';
import { ThemeType } from '../../theme';
import {
    AdminThemeQuestionsShort, AdminThemeTestsShort,
} from '../../themes';


export type AdminThemeType = With<ThemeType, [
    AdminThemeQuestionsShort,
    AdminThemeTestsShort
]>

export type AdminThemeShortType = Pick<ThemeType, 'id' | 'publicId' | 'title' | 'description' | 'enabled' | 'url' | 'additional'>;