import { useState } from 'react';
import { Lojinha as Lojinha01 } from '../01-css-global/components/Lojinha';
import { Lojinha as Lojinha02 } from '../02-css-modules/components/Lojinha';
import { Lojinha as Lojinha03 } from '../03-tailwind/components/Lojinha';
import { Lojinha as Lojinha04 } from '../04-styled-components/components/Lojinha';

export function App() {
  const [version, setVersion] = useState<number>(1);

  const handleVersionChange = (newVersion: number) => {
    setVersion(newVersion);
  };

  const renderLojinha = () => {
    switch (version) {
      case 1:
        return <Lojinha01 onVersionChange={handleVersionChange} />;
      case 2:
        return <Lojinha02 onVersionChange={handleVersionChange} />;
      case 3:
        return <Lojinha03 onVersionChange={handleVersionChange} />;
      case 4:
        return <Lojinha04 onVersionChange={handleVersionChange} />;
      default:
        return <Lojinha01 onVersionChange={handleVersionChange} />;
    }
  };

  return (
    <>
      {renderLojinha()}
    </>
  );
}

export default App;