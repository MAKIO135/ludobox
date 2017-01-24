import React from 'react'

import DownloadButton from '../RemoteGames/DownloadButton.jsx'

export default class GamesTable extends React.Component {

  render() {
    let rows = this.props.games.map( game => (
      <tr style={ game.existsLocally ? { background : "yellow" } : {}  }
        key={game.slug}>
        <td>
          <a
            href={"/games/"+game.slug}
            // target="_blank"
            >
            {game.title}
          </a>
        </td>
        <td>{game.type}</td>
        <td>{game.fab_time}</td>
        <td>{game.language}</td>
        {
          ! game.existsLocally && this.props.remoteApi && this.props.localApi ?
          <td>
            <DownloadButton
              remoteApi={this.props.remoteApi}
              localApi={this.props.localApi}
              slug={game.slug}
              />
          </td>
          :
          null
        }
      </tr>
    ))

    return (
      <div>
        <table className="twelve columns">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Type</td>
                    <td>Fab Time</td>
                    <td>Language</td>
                    {
                      this.props.remoteApi ?
                      <td>Download</td>
                      :
                      null
                    }
                </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
        </table>
      </div>
    )
  }
}
