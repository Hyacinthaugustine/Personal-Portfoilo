import Icon from "../Icon";

const IconGroup = ({ title, icons }) => {
  return (
    <div className="flex flex-col  gap-5">
      <h3 className="md:text-xl uppercase">{title}</h3>
      <div className="flex gap-4">
        {icons.map((item, index) => (
          <Icon
            key={index}
            icon={item.icon}
            color={item.color}
            social_link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default IconGroup;
