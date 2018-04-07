import React, {Component} from 'react'
import Color from 'color'
import TriangleSVGcomponent from './TriangleSVGcomponent'
import './App.scss'

const vertices = [
  [
    [0, 240],
    [120, 0],
    [240, 240]
  ],
  [
    [20, 240],
    [120, 40],
    [220, 240]
  ],
  [
    [40, 240],
    [120, 80],
    [200, 240]
  ],
  [
    [60, 240],
    [120, 120],
    [180, 240]
  ],
  [
    [80, 240],
    [120, 160],
    [160, 240]
  ]
]


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      randomColor: this.getRandomColor()
    }
  }
  
  componentDidMount() {
    this.timerId = setInterval(this.updateColor, 10)
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  
  getRandomColor = () => {
    const clrs = [
      '#ff0000',
      '#008000',
      '#0000ff'
    ]
    return clrs[Math.floor(Math.random() * clrs.length)]
  }
  
  updateColor = () => {
    this.setState({
      randomColor: this.getRandomColor()
    })
  }
  
  
  render() {
    const { randomColor } = this.state
    
    return (
      <div className="app">
        <svg width="240" height="240">
          <TriangleSVGcomponent
            vertices={vertices[0]}
            color={Color(randomColor).lighten(.6)}
            delay={0}
          />
          <TriangleSVGcomponent
            vertices={vertices[1]}
            color={Color(randomColor).lighten(.5)}
            delay={60}
          />
          <TriangleSVGcomponent
            vertices={vertices[2]}
            color={Color(randomColor).lighten(.4)}
            delay={110}
          />
          <TriangleSVGcomponent
            vertices={vertices[3]}
            color={Color(randomColor).lighten(.3)}
            delay={220}
          />
          <TriangleSVGcomponent
            vertices={vertices[4]}
            color={randomColor}
            delay={320}
          />
        </svg>
      </div>
    )
  }
}


export default App
