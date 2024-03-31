import React from 'react';
import {useSearchProductsQuery} from "../../store/productsApi.api";
import Categories from "../../components/Categories/Categories";
import styles from "./HomePage.module.css"
import ProductItem from "../../components/ProductItem/ProductItem";

const HomePage = () => {

    const { data, isLoading, isError } = useSearchProductsQuery('');
    console.log(data)

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading products.</div>;

    // @ts-ignore
    return (
        <div className={styles.homePage}>
            <div className={styles.container}>
                <Categories/>
            </div>
            <h4>All products</h4>
            <div className={styles.products}>
                {data && data.map((product: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                    <ProductItem key={product.id} productItem={product}/>
                ))}
            </div>

        </div>
    );
};

export default HomePage;