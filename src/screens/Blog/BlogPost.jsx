import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
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

const BlogPost = () => {
  const { slug } = useParams();
  const [allPosts, setAllPosts] = useState(null); // null = still loading
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Same runtime-fetched JSON as the blog list — edit
    // public/data/blog-posts.json and re-upload just that file to publish.
    fetch("/data/blog-posts.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load posts");
        return res.json();
      })
      .then((data) => setAllPosts(data))
      .catch(() => setNotFound(true));
  }, []);

  if (notFound) return <Navigate to="/blog" replace />;
  if (!allPosts) {
    return (
      <section className="w-full mt-16 py-24 text-center text-gray-500 font-outfit">
        Loading...
      </section>
    );
  }

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <section className="w-full mt-16 py-16 bg-white font-outfit">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="w-[90%] max-w-3xl mx-auto"
      >
        <motion.div variants={fadeInUp}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-customBlue font-semibold mb-8 hover:underline"
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </motion.div>

        <motion.span
          variants={fadeInUp}
          className="text-xs font-semibold text-customRed uppercase tracking-wide"
        >
          {post.category}
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-4"
        >
          {post.title}
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 text-sm text-gray-500 mb-8"
        >
          <span>{post.author}</span>
          <span>•</span>
          <span>{formatDate(post.date)}</span>
        </motion.div>

        {post.image && (
          <motion.img
            variants={fadeInUp}
            src={post.image}
            alt={post.title}
            className="w-full rounded-2xl mb-10 object-cover max-h-[420px]"
          />
        )}

        <motion.div variants={fadeInUp} className="space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-700 font-medium text-center sm:text-left">
            Have questions about this topic? Chat with our team on WhatsApp.
          </p>
          <a
            href="https://wa.me/2349153847999?text=Hello%20Caremed%20Connect"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl whitespace-nowrap"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </motion.div>

        {related.length > 0 && (
          <motion.div variants={fadeInUp} className="mt-16">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              More from the Blog
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="block bg-gray-50 border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all"
                >
                  <img
                    src={p.image || logo}
                    alt={p.title}
                    className={`w-full h-28 rounded-lg mb-3 ${
                      p.image
                        ? "object-cover"
                        : "object-contain p-6 opacity-70 bg-white"
                    }`}
                  />
                  <p className="font-semibold text-gray-800 line-clamp-2">
                    {p.title}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default BlogPost;
