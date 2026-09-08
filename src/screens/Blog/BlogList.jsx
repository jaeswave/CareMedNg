import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    // Fetched at runtime from /public/data/blog-posts.json (served as
    // /data/blog-posts.json). This file can be edited and re-uploaded to
    // the server directly WITHOUT rebuilding or redeploying the whole app.
    fetch("/data/blog-posts.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load posts");
        return res.json();
      })
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );
        setPosts(sorted);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section className="w-full mt-16 py-16 bg-white font-outfit">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="w-[90%] max-w-5xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-customBlue mb-3 text-center"
        >
          Caremed Blog
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-14"
        >
          Health tips, service updates, and stories from the Caremed Connect
          community.
        </motion.p>

        {status === "loading" && (
          <motion.p variants={fadeInUp} className="text-center text-gray-500">
            Loading posts...
          </motion.p>
        )}

        {status === "error" && (
          <motion.p variants={fadeInUp} className="text-center text-red-500">
            Couldn't load blog posts right now. Please refresh the page.
          </motion.p>
        )}

        {status === "ready" && posts.length === 0 && (
          <motion.p variants={fadeInUp} className="text-center text-gray-500">
            No posts yet — check back soon!
          </motion.p>
        )}

        {status === "ready" && posts.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div key={post.slug} custom={i} variants={fadeInUp}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="block h-full bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="h-44 w-full overflow-hidden bg-gray-100">
                    <img
                      src={post.image || logo}
                      alt={post.title}
                      loading="lazy"
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                        post.image
                          ? "object-cover"
                          : "object-contain p-10 opacity-70"
                      }`}
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-customRed uppercase tracking-wide">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-bold text-gray-800 mt-2 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default BlogList;
