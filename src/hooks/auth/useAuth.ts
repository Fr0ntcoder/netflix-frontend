import { useTypedSelector } from '@/hooks/other/useTypedSelector'

export const useAuth = () => useTypedSelector(state => state.user)
