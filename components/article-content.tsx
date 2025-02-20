import type React from "react"
import Image from "next/image"
import type { Article } from "@/lib/constants"

const ArticleContent: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{article.title}</h1>
      <div className="text-gray-600 mb-4">
        <span>{article.date}</span> • <span>{article.author}</span>
      </div>
      {article.sections.map((section, index) => {
        switch (section.type) {
          case "paragraph":
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: section.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
              />
            )
          case "image":
            return (
              <figure key={index} className="my-8">
                <Image
                  src={section.content || "/placeholder.svg"}
                  alt={section.caption || "Imagen del artículo"}
                  width={800}
                  height={400}
                  layout="responsive"
                  className="rounded-lg"
                />
                {section.caption && (
                  <figcaption className="text-center text-sm text-gray-500 mt-2">{section.caption}</figcaption>
                )}
              </figure>
            )
          case "subtitle":
            return <h2 key={index}>{section.content}</h2>
          case "list":
            return (
              <div key={index}>
                <h3>{section.content}</h3>
                <ul>
                  {section.items?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                    />
                  ))}
                </ul>
              </div>
            )
          default:
            return null
        }
      })}
    </article>
  )
}

export default ArticleContent

