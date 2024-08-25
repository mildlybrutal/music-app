import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useState } from "react";
const Discover = () => {
	const genreTitle = "Pop";
	console.log(genres);
	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center w-full">
				<h1 className="font-bold text-white text-2xl">Discover {genreTitle}</h1>
				<select
					onChange={() => {}}
					value={genreTitle}
					className="bg-black text-white rounded-full p-3 mb-8"
				>
					{genres.map((genre) => (
						<option value={genre.value} key={genre.value}>
							{genre.title}
						</option>
					))}
				</select>
			</div>
			<div className="flex flex-wrap justify-center gap-8 text-white ">
				{[1, 2, 3, 4].map((song, i) => {
					return <SongCard key={song.key} song={song} i={i} />;
				})}
			</div>
		</div>
	);
};

export default Discover;
