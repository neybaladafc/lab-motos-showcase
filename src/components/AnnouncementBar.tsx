const AnnouncementBar = () => {
  const announcement = "NOVIDADE: Agendamento online disponível! Entre em contato pelo WhatsApp. ";
  const repeatedText = announcement.repeat(10);

  return (
    <div className="bg-lab-black text-white py-2 overflow-hidden">
      <div className="animate-marquee">
        <span style={{ fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.05em' }}>
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
