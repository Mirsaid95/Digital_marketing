export const AboutCards = ({ item }) => {
  return (
    <div className="about-card mx-auto text-center mb-[65px] sm:mb-0">
      <img className="mx-auto mb-[30px] transition-all" src={item.img} alt="#" />
      <h3 className="font-[600] text-[16px] leading-[187%] text-textColor mb-[24px] transition-all">
        {item.title}
      </h3>
      <div>
        <img className="angle-icon mx-auto" src={item.angle} alt="#" />
      </div>
    </div>
  );
};
