const AnnouncementBar = () => {
  const announcement = "ANUNCIO ANUNCIO ANUNCIO ANUNCIO ";
  const repeatedText = announcement.repeat(10);

  return (
    <div className="bg-lab-black text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="inline-block font-medium text-sm tracking-wider">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
