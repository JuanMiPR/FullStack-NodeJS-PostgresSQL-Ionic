--
-- PostgreSQL database dump
--

-- Dumped from database version 12.0
-- Dumped by pg_dump version 12.0

-- Started on 2019-12-14 23:47:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE fullstack;
--
-- TOC entry 2857 (class 1262 OID 24708)
-- Name: fullstack; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE fullstack WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';


ALTER DATABASE fullstack OWNER TO postgres;

\connect fullstack

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 33255)
-- Name: buys; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.buys (
    id_buy integer NOT NULL,
    id_user integer NOT NULL,
    id_product integer NOT NULL,
    quantity integer NOT NULL,
    date date NOT NULL,
    payment_type character varying(200) NOT NULL,
    user_address character varying(255) NOT NULL
);


ALTER TABLE public.buys OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 33260)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id_product integer NOT NULL,
    product_name character varying(20) NOT NULL,
    product_stock integer NOT NULL,
    id_warehouse integer NOT NULL,
    product_image character varying
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 33291)
-- Name: products_id_product_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.products ALTER COLUMN id_product ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_id_product_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 202 (class 1259 OID 33245)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id_user integer NOT NULL,
    user_name character varying(1000),
    password character varying(1000) NOT NULL,
    user_rol character varying(20) DEFAULT 'Normal'::character varying NOT NULL,
    user_type character varying(500) DEFAULT 'Normal'::character varying NOT NULL,
    user_email character varying(500) NOT NULL,
    auth_token character varying(1000),
    image_profile character varying(1000)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 33293)
-- Name: users_id_user_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id_user ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_user_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 205 (class 1259 OID 33265)
-- Name: warehouses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.warehouses (
    id_warehouse integer NOT NULL,
    warehouse_address character varying(1000) NOT NULL,
    phone_number character(10)
);


ALTER TABLE public.warehouses OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 33295)
-- Name: warehouses_id_warehouse_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.warehouses ALTER COLUMN id_warehouse ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.warehouses_id_warehouse_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2846 (class 0 OID 33255)
-- Dependencies: 203
-- Data for Name: buys; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2847 (class 0 OID 33260)
-- Dependencies: 204
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products (id_product, product_name, product_stock, id_warehouse, product_image) OVERRIDING SYSTEM VALUE VALUES (25, 'Garrafa de Agua ', 5, 13, 'https://firebasestorage.googleapis.com/v0/b/authwithnodejs-1.appspot.com/o/images%2Fgarrafa%20de%20agua%20?alt=media&token=2e67924d-21fa-45b8-b01a-8da279abd1a4');
INSERT INTO public.products (id_product, product_name, product_stock, id_warehouse, product_image) OVERRIDING SYSTEM VALUE VALUES (26, 'Ron', 10, 13, 'https://firebasestorage.googleapis.com/v0/b/authwithnodejs-1.appspot.com/o/images%2Fron?alt=media&token=c6fa138a-45ee-431a-91f4-bd87e7cab6f0');


--
-- TOC entry 2845 (class 0 OID 33245)
-- Dependencies: 202
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id_user, user_name, password, user_rol, user_type, user_email, auth_token, image_profile) OVERRIDING SYSTEM VALUE VALUES (22, 'admin admin', '2bcba676f625470cd313f89af2a48b6042e28190d1d81e4aac3ec19d9da1d6da55a2646124ba92f89c580b57a16e73cd0a35d99ad8a3ecfca7a8d8bcc1240ee4c5a5ff1b5a89faf12d403bef7f9f69a85881227ab619f365c30757d3a3bbd09743701f2fe8adaea2af', 'admin', 'Normal', 'admin@admin.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2VtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNTc2MzY2NTQ3fQ.h5jH8nIUfXHtFI970k1p4Py90mu9ek3pRGeCGXUnVUU', 'https://firebasestorage.googleapis.com/v0/b/authwithnodejs-1.appspot.com/o/images%2Fadmin%40admin.com?alt=media&token=42f63a6e-761e-45a9-a83b-3f0cf81a9ee8');


--
-- TOC entry 2848 (class 0 OID 33265)
-- Dependencies: 205
-- Data for Name: warehouses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.warehouses (id_warehouse, warehouse_address, phone_number) OVERRIDING SYSTEM VALUE VALUES (13, 'Calle tenerife nº7', '657753248 ');


--
-- TOC entry 2858 (class 0 OID 0)
-- Dependencies: 206
-- Name: products_id_product_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_product_seq', 26, true);


--
-- TOC entry 2859 (class 0 OID 0)
-- Dependencies: 207
-- Name: users_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_user_seq', 22, true);


--
-- TOC entry 2860 (class 0 OID 0)
-- Dependencies: 208
-- Name: warehouses_id_warehouse_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.warehouses_id_warehouse_seq', 14, true);


--
-- TOC entry 2711 (class 2606 OID 33259)
-- Name: buys buy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buys
    ADD CONSTRAINT buy_pkey PRIMARY KEY (id_buy, id_user, id_product);


--
-- TOC entry 2713 (class 2606 OID 33264)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id_product);


--
-- TOC entry 2709 (class 2606 OID 33254)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);


--
-- TOC entry 2715 (class 2606 OID 33272)
-- Name: warehouses warehouses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.warehouses
    ADD CONSTRAINT warehouses_pkey PRIMARY KEY (id_warehouse);


--
-- TOC entry 2718 (class 2606 OID 41491)
-- Name: products products; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products FOREIGN KEY (id_warehouse) REFERENCES public.warehouses(id_warehouse) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2717 (class 2606 OID 41517)
-- Name: buys products; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buys
    ADD CONSTRAINT products FOREIGN KEY (id_product) REFERENCES public.products(id_product) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2716 (class 2606 OID 41501)
-- Name: buys users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buys
    ADD CONSTRAINT users FOREIGN KEY (id_user) REFERENCES public.users(id_user) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2019-12-14 23:47:54

--
-- PostgreSQL database dump complete
--

