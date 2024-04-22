export default function DescriptionBox() {
  return (
    <div className="my-16 mx-20">
      <div className="flex gap-2 items-center [&>*]:text-lg [&>*]:font-semibold [&>*]:border [&>*]:p-2 [&>*]:border-zinc-700 [&>*]:cursor-pointer">
        <div className="">Description</div>
        <div className="bg-gray-100">Reviews (120)</div>
      </div>
      <div className="flex flex-col gap-4 my-3 p-5 border border-zinc-700">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          officiis voluptates dignissimos exercitationem illo deleniti fuga et
          quasi? Consequuntur molestiae repudiandae illo eius rerum aliquid
          officia suscipit laborum provident eaque. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Officiis accusantium nesciunt dolores
          aliquam inventore? Magnam iure culpa nam vel sapiente veritatis odio,
          voluptate voluptatum quibusdam, modi neque assumenda pariatur qui.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          officiis voluptates dignissimos exercitationem illo deleniti fuga et
          quasi? Consequuntur molestiae repudiandae illo eius rerum aliquid
          officia suscipit laborum provident eaque.
        </p>
      </div>
    </div>
  );
}
