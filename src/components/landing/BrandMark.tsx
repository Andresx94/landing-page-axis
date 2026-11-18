// Marca de AXIS: el símbolo (mismo ícono de la app) + el nombre.
const BrandMark = () => (
  <div className="flex items-center gap-3">
    <img
      src={`${import.meta.env.BASE_URL}axis-icon.png`}
      alt=""
      width={40}
      height={40}
      className="w-10 h-10 rounded-lg"
    />
    <span className="font-serif text-xl font-medium tracking-wide">AXIS</span>
  </div>
);

export default BrandMark;
