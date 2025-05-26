
const references = [
  {
    id: 1,
    citation: "D. Sudharson et al., \"An Abstractive Summarization and Conversation Bot Using T5 and its Variants,\" ICAICCIT 2023, IEEE, pp. 431–437."
  },
  {
    id: 2,
    citation: "K. Maurya et al., \"NLP-Enhanced Long Document Summarization: A Comprehensive Approach for Information Condensation,\" 2024 2nd Int. Conf. on Advancement in Computation & Computer Technologies (InCACCT), pp. 187–192."
  },
  {
    id: 3,
    citation: "M. Ramina et al., \"Topic Level Summary Generation Using BERT-Induced Abstractive Summarization Model,\" Proc. ICICCS 2020, IEEE, pp. 747–752."
  },
  {
    id: 4,
    citation: "A. Goyal et al., \"TalkifyPy: The Pythonic Voice Assistant,\" 2024 1st Int. Conf. on Advanced Computing and Emerging Technologies (ACET), IEEE, DOI:10.1109/ACET61898.2024.10730081."
  },
  {
    id: 5,
    citation: "J. Christian et al., \"Analyzing Microservices and Monolithic Systems: Key Factors in Architecture, Development, and Operations,\" IC2IE 2023, IEEE, pp. 64–69."
  },
  {
    id: 6,
    citation: "Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). \"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding.\" arXiv preprint arXiv:1810.04805."
  },
  {
    id: 7,
    citation: "Brown, T., Mann, B., Ryder, N., et al. (2020). \"Language Models are Few-Shot Learners.\" NeurIPS 2020."
  },
  {
    id: 8,
    citation: "Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). \"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding.\" arXiv preprint arXiv:1810.04805."
  },
  {
    id: 9,
    citation: "Dutta, H. S., & Das, B. (2020). \"Hybrid AI Models for Educational Applications.\" Journal of Artificial Intelligence Research, vol. 67, pp. 231-245."
  },
  {
    id: 10,
    citation: "A. S. K. Shukla, D. Arora, and A. K. Sharma, \"Automatic Question Answer Generation Using T5 and NLP,\" IEEE ICCCA, 2019."
  },
  {
    id: 11,
    citation: "P. Kumar, N. Agarwal, and R. Nath, \"Generation of Multiple-Choice Questions From Textbook Contents of School-Level Subjects,\" IEEE ICCCA, 2019."
  },
  {
    id: 12,
    citation: "S. Kumar and M. Gupta, \"Automatic Question Generation for Intelligent Tutoring Systems,\" IEEE ICCCA, 2019."
  },
  {
    id: 13,
    citation: "A. R. Patel, P. K. Jha, and S. Roy, \"MCQGen: A Large Language Model-Driven MCQ Generator for Personalized Learning,\" IEEE ICCCA, 2019."
  },
  {
    id: 14,
    citation: "R. Sharma and K. Singh, \"Generation of Multiple-Choice Questions From Indian Educational Text,\" IEEE ICET, 2023."
  },
  {
    id: 15,
    citation: "N. J. Cepeda, H. Pashler, E. Vul, J. T. Wixted, and D. Rohrer, \"Distributed practice in verbal recall tasks: A review and quantitative synthesis,\" Psychological Bulletin, vol. 132, no. 3, pp. 354–380, 2006."
  },
  {
    id: 16,
    citation: "H. L. Roediger and A. C. Butler, \"The critical role of retrieval practice in long-term retention,\" Trends in Cognitive Sciences, vol. 15, no. 1, pp. 20–27, 2011."
  },
  {
    id: 17,
    citation: "P. Pavlik and J. R. Anderson, \"Using a model to compute the optimal schedule of practice,\" Journal of Experimental Psychology: Applied, vol. 14, no. 2, pp. 101–117, 2008."
  },
  {
    id: 18,
    citation: "S. H. Kang, \"Spaced repetition promotes efficient and effective learning: Policy implications for instruction,\" Policy Insights from the Behavioral and Brain Sciences, vol. 3, no. 1, pp. 12–19, 2016."
  },
  {
    id: 19,
    citation: "J. D. Karpicke and A. Bauernschmidt, \"Spaced retrieval: Absolute spacing enhances learning regardless of relative spacing,\" Journal of Experimental Psychology: Learning, Memory, and Cognition, vol. 37, no. 5, pp. 1250–1257, 2011."
  },
  {
    id: 20,
    citation: "Y. Tomikawa, A. Suzuki, and M. Uto, \"Adaptive Question–Answer Generation With Difficulty Control Using Item Response Theory and Pretrained Transformer Models,\" IEEE Transactions on Learning Technologies."
  }
];

export default function References() {
  return (
    <section id="references" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-green-700 text-center mb-16">
          📚 References
        </h2>
        <div className="bg-white shadow-md p-8 rounded-xl border-l-4 border-green-500">
          <div className="space-y-4">
            {references.map((ref) => (
              <div key={ref.id} className="flex gap-4">
                <span className="text-green-700 font-semibold min-w-[2.5rem]">
                  [{ref.id}]
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {ref.citation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
