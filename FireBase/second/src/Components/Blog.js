import { useState, useRef, useEffect } from "react";
import { collection, addDoc, onSnapshot , doc, deleteDoc } from "firebase/firestore"; 
import { db } from '../firbaseinit';

export default function Blog() {
    const [formData, setFormData] = useState({ title: "", content: "" });
    const [blogs, setBlogs] = useState([]);
    const titleRef = useRef(null);
    useEffect(() => {
        titleRef.current.focus();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            // try {
            //     const snapshot = await getDocs(collection(db, "blogs"));
            //     const blogsData = snapshot.docs.map((doc) => {
            //         return {
            //             id: doc.id,
            //             ...doc.data()
            //         };
            //     });
            //     setBlogs(blogsData);
            //     console.log(blogsData);
            // } catch (error) {
            //     console.error("Error fetching blogs: ", error);
            // }

            //Realtime update
            const unsub = onSnapshot(collection(db, "blogs"), (snapShot) => {
                const blogs = snapShot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log(blogs);
                setBlogs(blogs);
            });


        };
        fetchData();
    }, []);

    useEffect(() => {
        if (blogs.length && blogs[0].Title) {
            document.title = blogs[0].Title;
        } else {
            document.title = "No blogs!";
        }
    }, [blogs]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "blogs"), {
                Title: formData.title,
                Content: formData.content,
                createdOn: new Date().toISOString(),
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setFormData({ title: "", content: "" });
        titleRef.current.focus();
    }

    async function removeBlog(id) {
        try {
            const blogDoc = doc(db, "blogs", id);
            await deleteDoc(blogDoc);
            setBlogs(blogs.filter((blog) => blog.id !== id));
        } catch (error) {
            console.error("Error removing document: ", error);
        }
    }

    return (
        <>
            <h1>Write a Blog!</h1>
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <Row label="Title">
                        <input
                            className="input"
                            placeholder="Enter the Title of the Blog here.."
                            value={formData.title}
                            ref={titleRef}
                            onChange={(e) =>
                                setFormData({ title: e.target.value, content: formData.content })
                            }
                        />
                    </Row>

                    <Row label="Content">
                        <textarea
                            className="input content"
                            placeholder="Content of the Blog goes here.."
                            value={formData.content}
                            onChange={(e) =>
                                setFormData({ title: formData.title, content: e.target.value })
                            }
                        />
                    </Row>
                    <button className="btn">ADD</button>
                </form>
            </div>

            <hr />
            <h2>Blogs</h2>
            {blogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                blogs.map((blog) => (
                    <div key={blog.id} className="blog">
                        <h3>{blog.Title}</h3>
                        <hr />
                        <p>{blog.Content}</p>

                        <div className="blog-btn">
                            <button
                                onClick={() => removeBlog(blog.id)}
                                className="btn remove"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    );
}
