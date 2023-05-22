import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function Surprised(props: SvgProps) {
  return (
    <Svg width={120} height={120} viewBox='0 0 120 120' fill='none' {...props}>
      <Path
        d='M42 37l.704.71.001-.001.019-.018.085-.079c.079-.071.2-.177.357-.305.316-.257.78-.603 1.357-.949C45.69 35.66 47.26 35 49 35c1.74 0 3.31.66 4.477 1.358.578.346 1.04.692 1.357.949a8.943 8.943 0 01.442.384l.019.018.001.002L56 37c.704-.71.703-.711.703-.711l-.001-.002-.004-.003-.01-.01-.034-.033a10.825 10.825 0 00-.558-.486c-.375-.305-.917-.709-1.592-1.113C53.164 33.84 51.234 33 49 33c-2.234 0-4.164.84-5.504 1.642-.675.404-1.217.808-1.592 1.113a10.84 10.84 0 00-.558.486l-.034.033-.01.01-.004.004-.002.001L42 37zM64.704 37.71L64 37l-.704-.71.002-.002.004-.004.01-.01.034-.033a10.825 10.825 0 01.558-.486c.375-.305.917-.709 1.592-1.113C66.836 33.84 68.766 33 71 33c2.234 0 4.164.84 5.504 1.642.675.404 1.217.808 1.592 1.113a10.912 10.912 0 01.558.486l.034.033.01.01.004.004h.001s.001.002-.703.712l-.704.71-.001-.001-.019-.018a8.853 8.853 0 00-.442-.384 11.67 11.67 0 00-1.357-.949C74.31 35.66 72.74 35 71 35c-1.74 0-3.31.66-4.477 1.358-.578.346-1.04.692-1.357.949a8.87 8.87 0 00-.442.384l-.019.018-.001.002z'
        fill='#212121'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M54 45.5c0 1.933-1.343 3.5-3 3.5s-3-1.567-3-3.5 1.343-3.5 3-3.5 3 1.567 3 3.5zm-4 .5a1 1 0 102 0 1 1 0 00-2 0z'
        fill='#212121'
      />
      <Path d='M60 62a3 3 0 100-6 3 3 0 000 6z' fill='#212121' />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M69 49c1.657 0 3-1.567 3-3.5S70.657 42 69 42s-3 1.567-3 3.5 1.343 3.5 3 3.5zm0-2a1 1 0 110-2 1 1 0 010 2z'
        fill='#212121'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M83.416 64.81A31.887 31.887 0 0092 43c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32a31.892 31.892 0 008.584 21.81C20.77 73.209 10 89.847 10 109h4c0-18.11 10.466-33.776 25.679-41.28A31.868 31.868 0 0060 75a31.87 31.87 0 0020.355-7.307l-.034.028C95.534 75.224 106 90.89 106 109h4c0-19.154-10.77-35.792-26.584-44.19zM60 71c15.464 0 28-12.536 28-28S75.464 15 60 15 32 27.536 32 43s12.536 28 28 28z'
        fill='#212121'
      />
    </Svg>
  )
}

export default Surprised