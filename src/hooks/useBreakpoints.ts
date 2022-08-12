import useMediaQuery from 'beautiful-react-hooks/useMediaQuery'
import { useMemo } from 'react'

const useBreakpoints = () => {
  const isVerySmallScreen = useMediaQuery('(max-width: 420px)')
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  const isMediumScreen = useMediaQuery('(max-width: 768px)')
  const isLargeScreen = useMediaQuery('(max-width: 1024px)')

  const value = useMemo(
    () => ({
      isVerySmallScreen,
      isSmallScreen,
      isMediumScreen,
      isLargeScreen,
    }),
    [isSmallScreen, isMediumScreen, isLargeScreen, isVerySmallScreen]
  )

  return {
    ...value,
  }
}

export default useBreakpoints
