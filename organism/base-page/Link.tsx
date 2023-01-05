const LinkRels = ({ link }: any) => {
  if (!link)
    return (
      <>
        <link rel="icon" href="/favicon.ico" />
      </>
    )

  return <>{link}</>
}

export { LinkRels }
