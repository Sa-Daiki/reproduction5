const App = () => {
  return (
    <>
      <main className="mb-[80px]">
        <div className="flex flex-col lg:flex-row mb-[60px]">
          <div className="w-[100%] lg:w-[50%]">
            <img
              className="h-auto lg:h-[700px] w-[100%] object-cover align-bottom"
              src="/recipe 2.jpg"
            />
          </div>

          <div className="w-[100%] lg:w-[50%] pt-[40px] px-[5%]">
            <section className="mb-[40px]">
              <h1 className="text-[28px] font-bold mb-5">
                ひよこ豆とアボガドのタコス
              </h1>
              <p>
                たっぷりのひよこ豆とレンズ豆にアボガドとトマトを添えて、少しライムを絞ったらおいしいタコスのできあがりです。
              </p>
            </section>

            <section className="mb-[40px] justify-between">
              <h2 className="text-[20px] mb-[20px] pb-[5px] font-bold border-b-[1px] ">
                材料（2人分）
              </h2>
              <dl className="flex flex-wrap ">
                <dt className="w-[85%] py-[6px] border-b-[1px] border-dotted">
                  テキストテキスト
                </dt>
                <dd className="w-[15%] py-[6px] border-b-[1px] border-dotted">
                  １個
                </dd>
                <dt className="w-[85%] py-[6px] border-b-[1px] border-dotted">
                  テキストテキスト
                </dt>
                <dd className="w-[15%] py-[6px] border-b-[1px] border-dotted">
                  １個
                </dd>
                <dt className="w-[85%] py-[6px] border-b-[1px] border-dotted">
                  テキストテキスト
                </dt>
                <dd className="w-[15%] py-[6px] border-b-[1px] border-dotted">
                  １個
                </dd>
                <dt className="w-[85%] py-[6px] border-b-[1px] border-dotted">
                  テキストテキスト
                </dt>
                <dd className="w-[15%] py-[6px] border-b-[1px] border-dotted">
                  １個
                </dd>
                <dt className="w-[85%] py-[6px] border-b-[1px] border-dotted">
                  テキストテキスト
                </dt>
                <dd className="w-[15%] py-[6px] border-b-[1px] border-dotted">
                  １個
                </dd>
              </dl>
            </section>

            <section className="justify-between">
              <h2 className="text-[20px] pb-[5px] mb-[15px] font-bold border-b-[1px]">
                作り方
              </h2>
              <ol className="list-decimal">
                <li className="border-b-[1px] py-[6px] ml-[20px] border-dotted">
                  テキストテキストテキストテキスト
                </li>
                <li className="border-b-[1px] py-[6px] ml-[20px] border-dotted">
                  テキストテキストテキストテキスト
                </li>
                <li className="border-b-[1px] py-[6px] ml-[20px] border-dotted">
                  テキストテキストテキストテキスト
                </li>
                <li className="border-b-[1px] py-[6px] ml-[20px] border-dotted">
                  テキストテキストテキストテキスト
                </li>
                <li className="border-b-[1px] py-[6px] ml-[20px] border-dotted">
                  テキストテキストテキストテキスト
                </li>
              </ol>
            </section>
          </div>
        </div>
        <div className="text-center">
          <a className="text-[14px] py-[18px] px-[60px] border-[1px] border-black">
            レシピ一覧を見る
          </a>
        </div>
      </main>

      <footer className="p-[20px]">
        <ul className="flex justify-center mb-[20px]">
          <li className="mx-[10px]">
            <a className="underline text-[12px]">Instagram</a>
          </li>
          <li className="mx-[10px]">
            <a className="underline text-[12px]">Twitter</a>
          </li>
          <li className="mx-[10px]">
            <a className="underline text-[12px]">Facebook</a>
          </li>
        </ul>
        <p className="text-center text-[12px]">&copy; 2021 Recipe Diary</p>
      </footer>
    </>
  );
};

export default App;
