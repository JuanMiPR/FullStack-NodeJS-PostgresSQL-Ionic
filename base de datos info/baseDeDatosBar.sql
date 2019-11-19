--
-- PostgreSQL database dump
--

-- Dumped from database version 12.0
-- Dumped by pg_dump version 12.0

-- Started on 2019-11-18 22:26:17

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
-- TOC entry 2860 (class 1262 OID 24708)
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
-- TOC entry 203 (class 1259 OID 33132)
-- Name: buy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.buy (
    id_buy integer NOT NULL,
    id_user integer NOT NULL,
    id_product integer NOT NULL,
    quantity integer NOT NULL,
    date timestamp without time zone NOT NULL,
    payment_type character varying(200) NOT NULL,
    user_address character varying(255) NOT NULL
);


ALTER TABLE public.buy OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 33171)
-- Name: buy_id_buy_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.buy ALTER COLUMN id_buy ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.buy_id_buy_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 205 (class 1259 OID 33139)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id_product integer NOT NULL,
    product_name character varying(20) NOT NULL,
    product_stock integer NOT NULL,
    id_provider integer NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 33137)
-- Name: products_id_product_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_product_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_product_seq OWNER TO postgres;

--
-- TOC entry 2861 (class 0 OID 0)
-- Dependencies: 204
-- Name: products_id_product_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_product_seq OWNED BY public.products.id_product;


--
-- TOC entry 207 (class 1259 OID 33147)
-- Name: providers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.providers (
    id_provider integer NOT NULL,
    provider_name character varying(20),
    dni_provider character(9) NOT NULL
);


ALTER TABLE public.providers OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 33145)
-- Name: providers_id_provider_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.providers_id_provider_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.providers_id_provider_seq OWNER TO postgres;

--
-- TOC entry 2862 (class 0 OID 0)
-- Dependencies: 206
-- Name: providers_id_provider_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.providers_id_provider_seq OWNED BY public.providers.id_provider;


--
-- TOC entry 202 (class 1259 OID 33122)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id_user integer NOT NULL,
    user_name character varying(20),
    password character varying(1000) NOT NULL,
    user_rol character varying(20) DEFAULT 'Normal'::character varying NOT NULL,
    user_type character varying(500) DEFAULT 'Normal'::character varying NOT NULL,
    user_email character varying(500) NOT NULL,
    auth_token character varying(1000)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 33169)
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
-- TOC entry 2708 (class 2604 OID 33142)
-- Name: products id_product; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id_product SET DEFAULT nextval('public.products_id_product_seq'::regclass);


--
-- TOC entry 2709 (class 2604 OID 33150)
-- Name: providers id_provider; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.providers ALTER COLUMN id_provider SET DEFAULT nextval('public.providers_id_provider_seq'::regclass);


--
-- TOC entry 2848 (class 0 OID 33132)
-- Dependencies: 203
-- Data for Name: buy; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.buy (id_buy, id_user, id_product, quantity, date, payment_type, user_address) FROM stdin;
\.


--
-- TOC entry 2850 (class 0 OID 33139)
-- Dependencies: 205
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id_product, product_name, product_stock, id_provider) FROM stdin;
\.


--
-- TOC entry 2852 (class 0 OID 33147)
-- Dependencies: 207
-- Data for Name: providers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.providers (id_provider, provider_name, dni_provider) FROM stdin;
\.


--
-- TOC entry 2847 (class 0 OID 33122)
-- Dependencies: 202
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id_user, user_name, password, user_rol, user_type, user_email, auth_token) FROM stdin;
\.


--
-- TOC entry 2863 (class 0 OID 0)
-- Dependencies: 209
-- Name: buy_id_buy_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.buy_id_buy_seq', 1, false);


--
-- TOC entry 2864 (class 0 OID 0)
-- Dependencies: 204
-- Name: products_id_product_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_product_seq', 1, false);


--
-- TOC entry 2865 (class 0 OID 0)
-- Dependencies: 206
-- Name: providers_id_provider_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.providers_id_provider_seq', 1, false);


--
-- TOC entry 2866 (class 0 OID 0)
-- Dependencies: 208
-- Name: users_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_user_seq', 5, true);


--
-- TOC entry 2713 (class 2606 OID 33136)
-- Name: buy buy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buy
    ADD CONSTRAINT buy_pkey PRIMARY KEY (id_buy, id_user, id_product);


--
-- TOC entry 2715 (class 2606 OID 33144)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id_product);


--
-- TOC entry 2717 (class 2606 OID 33152)
-- Name: providers providers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (id_provider);


--
-- TOC entry 2711 (class 2606 OID 33131)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);


--
-- TOC entry 2718 (class 2606 OID 33153)
-- Name: buy fkbuy165279; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buy
    ADD CONSTRAINT fkbuy165279 FOREIGN KEY (id_user) REFERENCES public.users(id_user);


--
-- TOC entry 2719 (class 2606 OID 33158)
-- Name: buy fkbuy319272; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buy
    ADD CONSTRAINT fkbuy319272 FOREIGN KEY (id_product) REFERENCES public.products(id_product);


--
-- TOC entry 2720 (class 2606 OID 33163)
-- Name: products fkproducts334911; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT fkproducts334911 FOREIGN KEY (id_provider) REFERENCES public.providers(id_provider);


-- Completed on 2019-11-18 22:26:17

--
-- PostgreSQL database dump complete
--

