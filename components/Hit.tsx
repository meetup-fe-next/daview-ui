'use client';

function Hit({ hit, components }: any) {
  console.log(hit);
  
  return (
    <a href={hit.url} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="name" />
        </div>
      </div>
    </a>
  );
}

export default Hit;
