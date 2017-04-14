import React from 'react';

// import blah as SVG from 'react-svg';

// import Svg,{
//     Circle,
//     Ellipse,
//     G,
//     LinearGradient,
//     RadialGradient,
//     Line,
//     Path,
//     Polygon,
//     Polyline,
//     Rect,
//     Symbol,
//     Text,
//     Use,
//     Defs,
//     Stop
// } from 'react-native-svg';

// import Parent from './Parent.jsx';
// <Parent numberOfChildren={7} />

export default class App extends React.Component {
	render() {
		return (
			<svg width='200' height='200'>
                <path stroke="black" d={
					//this shape 
					//the first two are for the rewind button
					'M 25 100 L 49 88 L 49 112'				+
					'M 49 100 L 73 88 L 73 112'				+
					//this next one is for the play button (starts at its top left corner)
					'M 88 88 L 112 100 L 88 112'			+
					//the next two will be for the fast-forward button (starts at its top left corner)
					'M 127 88 L 151 100 L 127 112'			+
					'M 151 88 L 175 100 L 151 112'			+
					//next I will draw the pause button above the play button
					'M 88 49 L 98 49 L 98 73 L 88 73'		+
					'M 102 49 L 112 49 L 112 73 L 102 73'	+
					//finally, now for the stop button
					'M 88 127 L 112 127 L 112 151 L 88 151 '
				}/>
            </svg>
		)
	}
}
