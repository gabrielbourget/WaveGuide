// - Return copy of input array that only includes matches to search query.
export const searchThroughArtists = (queryToMatch, artists) => (

	// - Shortcut in order to display all artists.
	if (queryToMatch === 'all' 
			|| queryToMatch === 'All'
			|| queryToMatch === 'ALL') return artists;

	artists.filter((artist) => {
		const regex = new RegExp(queryToMatch, 'gi');
		return artist.match(regex);
	})
);

// - Return given array of artists sorted either alphabetically or reverse alphabetically.
export const sortArtists = (direction, artistsCopy) => {

	let sortedArtists;

	switch (direction) {
		case sortCriteriaEnum.ALPHABETICAL: {
			sortedArtists = artistsCopy.sort((a,b) => a.name > b.name ? 1 : -1);
		}
		case sortCriteriaEnum.REVERSE_ALPHABETICAL: {
			sortedArtists = artistsCopy.sort((a,b) => a.name > b.name ? -1 : 1);
		}
		default: return artistsCopy;
	}

	return sortedArtists;
}
