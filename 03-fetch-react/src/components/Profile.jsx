const Profile = ({ data }) => {
    return (
        <main className="page">
            <article className="github-card">
                <header className="profile-head">
                    <img
                        className="avatar"
                        src={data.avatar_url}
                        alt={`${data.login} avatar`}
                    />
                    <div>
                        <h1>{data.name || data.login}</h1>
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="username"
                        >
                            @{data.login}
                        </a>
                        <p className="bio">
                            {data.bio || "No bio available yet."}
                        </p>
                    </div>
                </header>

                <section className="stats">
                    <div>
                        <span>Followers</span>
                        <strong>{data.followers}</strong>
                    </div>
                    <div>
                        <span>Following</span>
                        <strong>{data.following}</strong>
                    </div>
                    <div>
                        <span>Repos</span>
                        <strong>{data.public_repos}</strong>
                    </div>
                </section>

                <section className="meta">
                    <p>
                        <strong>Location:</strong>{" "}
                        {data.location || "Not specified"}
                    </p>
                    <p>
                        <strong>Company:</strong>{" "}
                        {data.company || "Not specified"}
                    </p>
                    <p>
                        <strong>Blog:</strong>{" "}
                        {data.blog ? (
                            <a
                                href={
                                    data.blog.startsWith("http")
                                        ? data.blog
                                        : `https://${data.blog}`
                                }
                                target="_blank"
                                rel="noreferrer"
                            >
                                {data.blog}
                            </a>
                        ) : (
                            "Not specified"
                        )}
                    </p>
                    <p>
                        <strong>Member Since:</strong>{" "}
                        {new Date(data.created_at).toLocaleDateString()}
                    </p>
                </section>
            </article>
        </main>
    );
};

export default Profile;
