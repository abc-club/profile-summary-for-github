import request from "@/services/request";

// 个人主要信息
export async function getUser(payload) {
  const { user, } = payload
  return request({
    url: `users/${user}`,
    method: "GET",
    data: {}
  });
}

export async function getCommit(payload) {
  const { user, } = payload
  return request({
    url: `https://github-contributions-api.now.sh/v1/${user}`,
    method: "GET",
    data: {}
  });
}

// // 人所有repo
// export async function getRepos(payload) {
//   const { user, } = payload
//   return request({
//     url: `users/${user}/repos`,
//     method: "GET",
//     data: {}
//   });
// }

// export async function getRepoContent(payload) {
//   const { user, repo } = payload
//   return request({
//     url: `repos/${user}/${repo}`,
//     method: "GET",
//     data: {}
//   });
// }
