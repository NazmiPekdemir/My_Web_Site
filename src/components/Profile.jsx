const Profile = () => {
  return (
    <section className="bg-gray flex column">
      <h1>Profile</h1>
      <div className="flex">
        <article className="flex column">
          <h3>Basic Information</h3>{" "}
          <div>
            <p>Doğum Tarihi</p>
            <p>12.01.1996</p>
          </div>
          <div>
            <p>İkimat Şehri</p>
            <p>Bursa</p>
          </div>
          <div>
            <p>Eğitim Durumu</p>
            <p>EEM</p>
          </div>
          <div>
            <p>Tercih Ettiği rol</p>
            <p> Front end UI</p>
          </div>
        </article>
        <article className="flex column">
          <h3>About me </h3>
          <p>
            {" "}
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsum{" "}
          </p>
          <p>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsum
          </p>
        </article>
      </div>
    </section>
  );
};

export default Profile;
