import { Component } from 'react'
import LinePanel from '../common/line-panel'

class Demo extends Component {
  constructor() {
    super()
  }

  render() {
    const { demos } = this.props

    return (
      <div>
        <LinePanel title={'一些练习'} />
        <ul>
          {demos.map((demo, i) => (
            <li key={i}><a href={demo.url} target="_blank">{demo.title}</a></li>
          ))}
        </ul>
        <style jsx>{`
        ul {
          padding: 1.2rem 3rem;
        }

        li + li {
          margin-top: 1rem;
        }
        `}</style>
      </div>
    )
  }
}

export default Demo
