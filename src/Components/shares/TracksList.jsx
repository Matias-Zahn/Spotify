import TrackCard from "./TrackCard"

function TracksList({ tracks }) {
  return (
    <section className="grid gap-4 mt-6">
        {
            tracks.map((track) => <TrackCard showAddBtn  track={track} showPlayBtn={track.external_urls.spotify} key={track.id} />)
        }
    </section>
  )
}
export default TracksList