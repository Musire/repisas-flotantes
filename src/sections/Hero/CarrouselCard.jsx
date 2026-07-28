export default function CarrouselCard ({ data }) {
    const { url, alt, title, description } = data
    return (
        <article class="relative overflow-hidden rounded-xl">
            <figure class="w-full h-full">
                <Image src={url} alt={alt} />
                <figcaption class="absolute inset-0 flex flex-col justify-end">
                    <strong class="text-xl font-bold">{title}</strong>
                    <p class="text-sm">{description}</p>
                </figcaption>
            </figure>
        </article>
    );
}